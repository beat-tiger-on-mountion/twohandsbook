package htmlCrawler;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.jsoup.select.Elements;

import cn.edu.hfut.dmic.webcollector.model.CrawlDatums;
import cn.edu.hfut.dmic.webcollector.model.Page;
import cn.edu.hfut.dmic.webcollector.plugin.berkeley.BreadthCrawler;
import cn.edu.hfut.dmic.webcollector.util.FileUtils;

public class MyCrawler extends BreadthCrawler {
	private static HSSFWorkbook workbook;
	private static HSSFSheet sheet;
	private static HSSFRow row;
	private static HSSFCell cell;
	private static int m;
	private static Connection conn;
	private static int n;// ��¼���ݿ����м�������
	private static Statement st;

	public MyCrawler(String crawlPath, boolean autoParse) {
		super(crawlPath, autoParse);
		// TODO �Զ����ɵĹ��캯�����
		m = 0;
		n = 0;
	}

	@Override
	public void visit(Page page, CrawlDatums next) {
		// TODO �Զ����ɵķ������
		// System.out.println("������ȡ����ҳ�ǣ�"+page.url());
		// ��ȡ������ҳ���浽mycont.html��
		try {
			FileUtils.write("E://Tencent/a.html", page.content());
			// ҳ���ַ
			String url = page.url();
			// ҳ�����
			String title = page.doc().title();
			// ��������
			Elements text = page.select("div.articlebody");
			// ҳ��ʱ��
			Elements time = page.select("span.time.SG_txtc");

			if (page.matchUrl("http://blog.sina.com.cn/.*")) {
				if (text.isEmpty()) {

					text = page.select("div.articalContent");
				} else {
					text = page.select("div.articalContent");
				}
				time = page.select("span.time.SG_txtc");

			} else if (page.matchUrl("http://baby.sina.com.cn/.*")) {
				if (!page.select("div#artibody.article").isEmpty()) {
					text = page.select("div#artibody.article");
				}
				if (!page.select("dl.content").isEmpty()) {
					text = page.select("dl.content");
				}
				if (!page.select("div#article.article").isEmpty()) {
					text = page.select("div#article.article");
				}
				if (!page.select("div#articlebody").isEmpty()) {
					text = page.select("div#articlebody");
				}
				time = page.select("span.date");
			}
			System.out.println("��ַΪ��" + url);
			System.out.println("����Ϊ��" + title);
			System.out.println("ʱ��Ϊ��" + time.text());
			System.out.println("����Ϊ��" + text.text());
			// д���ı��ļ�
			 toFile(url, title, time,text);
			// д��excel��
			 createExcel(url, title,time,text);
			// д�����ݿ�
			try {
				if (!text.isEmpty() && !time.isEmpty()) {
					n++;
					insertStu("insert into crawler values(?,?,?,?)", url, title, time.text(), text.text());
				}
			} catch (SQLException e) {
				// TODO �Զ����ɵ� catch ��
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		} catch (IOException e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}

	// ��ץȡ������д���ı��ļ�
	public static void toFile(String url, String title, Elements time, Elements text) throws IOException {
		if (!text.isEmpty() && !time.isEmpty()) {
			BufferedWriter bw = new BufferedWriter(new FileWriter("E:\\Tencent\\b.txt", true));
			try {
				bw.write("��ҳ��" + url + "\r\n");
				bw.write("����: " + title + "\r\n");
				bw.write("ʱ��: " + time.text() + "\r\n");
				bw.write("����: " + text.text() + "\r\n");
				bw.write("\r\n");
				bw.close();
			} catch (IOException e) {
				// TODO �Զ����ɵ� catch ��
				e.printStackTrace();
			}
		}
	}

	// ����excel��д������
	public static void createExcel(String url, String title, Elements time, Elements text) throws IOException {
		// ����ǵ�0�оʹ���excel�������⣬�����д��
		if (m == 0) {
			workbook = new HSSFWorkbook();
			// �½�sheet
			sheet = workbook.createSheet("���ݽ���");
			// ������,�к���Ϊ�������ݸ�createRow()����,��һ�д�0��ʼ����
			String[] th = { "��ҳ", "����", "ʱ��", "����" };
			// ������
			row = sheet.createRow(0);
			for (int i = 0; i < 4; i++) {
				cell = row.createCell(i);
				cell.setCellValue(th[i]);
			}
			m = 1;
			System.out.println("�ѳɹ�����excel��!");
		} else {
			// ��Ϊ��ʱд������
			if (!text.isEmpty() && !time.isEmpty()) {
				row = sheet.createRow(m);
				row.createCell(0).setCellValue(url);
				row.createCell(1).setCellValue(title);
				row.createCell(2).setCellValue(time.text());
				row.createCell(3).setCellValue(text.text());
				m++;
			}
		}
		// �����������
		FileOutputStream fos = new FileOutputStream(new File("E:\\Tencent\\a.xls"));
		workbook.write(fos);
		workbook.close();
		fos.close();
	}

	// �����ݿ��������
	public static int insertStu(String sql, String... args) throws SQLException {
		int row = 0;
		PreparedStatement ps = null;
		if (sql == null || sql.equals("")) {
			return 0;
		} else {
			ps = conn.prepareStatement(sql);
			for (int i = 0; i < args.length; i++) {
				ps.setObject(i + 1, args[i]);
			}
			row = ps.executeUpdate();
			return row;
		}
	}

	public static void main(String[] args) throws SQLException {
		MyCrawler myCrawler = new MyCrawler("crawl", true);
		myCrawler.addSeed("http://news.sina.com.cn/");
		myCrawler.addRegex("http://blog.sina.com.cn/.*");
		myCrawler.addRegex("-http://blog.sina.com.cn/u/.*");
		myCrawler.addRegex("http://baby.sina.com.cn/.*");
		myCrawler.addRegex("-http://baby.sina.com.cn/zt_d/.*");
		myCrawler.addRegex("-.*\\.(jpg|png|gif).*");
		myCrawler.addRegex("-.*#.*");
		myCrawler.addRegex("-http://.+.sina.com.cn/.*/$");
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(
					"jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=UTF-8", "root", "");
			st = conn.createStatement();
		} catch (ClassNotFoundException e1) {
			// TODO �Զ����ɵ� catch ��
			e1.printStackTrace();
		}
		try {
			myCrawler.setThreads(20);
			myCrawler.setMaxExecuteCount(10);
			myCrawler.start(2);
			System.out.println(n);
		} catch (Exception e) {
			// TODO �Զ����ɵ� catch ��
			e.printStackTrace();
		}
	}
}
