package conube.test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import conube.test.data.CompanyInfo;


public class Context {

	private static EntityManagerFactory emf;
	private HttpServletRequest request;
	private EntityManager em;
	private static CompanyInfo company;
	
	protected Context(HttpServletRequest servletRequest){

		
	}
	
	public static Context getCurrent(){
		
		HttpServletRequest servletRequest = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		
		return new Context(servletRequest);
	}
	
	public CompanyInfo getCompanyInfo(){
		return company;
	}
	
	public void setCompanyInfo(CompanyInfo info){
		company = info;
	}
	
	public EntityManager getEntityManager(){
			
		
		if (em == null) em = emf.createEntityManager();
		
		return em;
	}
	
	public static void initialize(){
		Logger log = Logger.getLogger(Launcher.class);
		log.info("Initilizing Data Context");
		emf =  Persistence.createEntityManagerFactory("data.odb");
		
		EntityManager conn = emf.createEntityManager();
		
		CompanyInfo info = conn.find(CompanyInfo.class, 1);
		
		if (info == null){

			log.info("Company Data isn't exists. Creating new with default Data");
			info = new CompanyInfo();
			info.setName("My Company");
			info.setId(1);
			info.setCofinsTaxRate(5);
			info.setCsllTaxRate(5);
			info.setIrTaxRate(5);
			info.setPisTaxRate(5);
			
			conn.getTransaction().begin();
			
			conn.persist(info);
			
			conn.getTransaction().commit();

		}
		

		company = info;
		log.info("Company Selected: "+company.getName());
		
	}
	
}
