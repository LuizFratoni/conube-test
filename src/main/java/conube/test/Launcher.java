package conube.test;

import java.io.File;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.apache.log4j.ConsoleAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;


@SpringBootApplication
@Configuration
@EnableWebMvc
public class Launcher extends WebMvcConfigurerAdapter implements EmbeddedServletContainerCustomizer {

	static String mainPath;
	
	
	
	public static void main(String[] args){
		ConsoleAppender console = new ConsoleAppender(); //create appender
		  //configure the appender
		  String PATTERN = "%d [%p|%c|%C{1}] %m%n";
		  console.setLayout(new PatternLayout(PATTERN)); 
		  console.setThreshold(Level.INFO);
		  console.activateOptions();
		  Logger.getRootLogger().addAppender(console);
		  Logger log = Logger.getLogger(Launcher.class);
		  try {
			  mainPath = Launcher.class.getProtectionDomain().getCodeSource().getLocation().toURI().getPath();
			//mainPath = new File(".").getCanonicalPath()+File.separator;
			log.info("System  Started at "+mainPath);  
			//bootProp.load(new FileInputStream(new File(mainPath+"boot")));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  
  
		SpringApplication app = new SpringApplication(Launcher.class);
		app.setShowBanner(false);
		 app.run(args);
		
		Context.initialize();
	//	OneContext.initializeDatabase(mainPath+"data/");

	}

    public void customize(ConfigurableEmbeddedServletContainer factory) {
    	Logger log = Logger.getLogger(Launcher.class);
        factory.setDocumentRoot(new File(mainPath+"web/"));
        factory.setPort(8080);
        /*factory.addErrorPages(new ErrorPage(HttpStatus.BAD_REQUEST, "/errors/400"));
        ErrorPage error401Page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/401.html");
        ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/errors/404.html");
        ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/errors/500.html");
        factory.addErrorPages(error401Page, error404Page, error500Page);*/
    }
    
    @Bean
    public ViewResolver getViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/jsp/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
    
    
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }   
    


}

