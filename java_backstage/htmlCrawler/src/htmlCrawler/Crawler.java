package htmlCrawler;

import java.io.FileNotFoundException;
import java.io.IOException;

import cn.edu.hfut.dmic.webcollector.model.CrawlDatums;
import cn.edu.hfut.dmic.webcollector.model.Page;
import cn.edu.hfut.dmic.webcollector.plugin.berkeley.BreadthCrawler;
import cn.edu.hfut.dmic.webcollector.util.FileUtils;

public class Crawler extends BreadthCrawler {

	public Crawler(String crawlPath, boolean autoParse) {
		super(crawlPath, autoParse);
		// TODO 自动生成的构造函数存根
	}

	@Override
	// 对每一个正在爬取的页面需要进行的操作
	public void visit(Page page, CrawlDatums next) {
		// TODO 自动生成的方法存根
		System.out.println("正在提取的网页是：" + page.url());
		// 将爬取的内容写到test.html页中
		try {
		FileUtils.write("D://360Downloads/test.html", page.content());

		} catch (FileNotFoundException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		// 创建爬虫对象
		Crawler crawler = new Crawler("html_crawler", true);
		crawler.addSeed("http://software.hebtu.edu.cn/");
		// 正规则爬取,至少符合一条正例规则
		crawler.addRegex("+^http://software.hebtu.edu.cn/.*");
		// 负规则，例如不爬取jpg png gif，不能符合任意一条反例规则
		crawler.addRegex("-.*\\.(jpg|png|gif).*");
		crawler.addRegex("-.*#.*");
		try {
			// 线程数
			crawler.setThreads(3);
			// 设置爬取任务的最大执行上线
			crawler.setMaxExecuteCount(10);
			// 设置爬取深度
			crawler.start(2);
		} catch (Exception e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
	}

}
