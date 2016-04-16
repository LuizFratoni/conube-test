package conube.test;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import conube.test.data.CompanyInfo;

@Controller
public class ConfigController {
	
	@RequestMapping(value="/company")
	public @ResponseBody CompanyInfo getCompanyInfo(){
		return Context.getCurrent().getCompanyInfo();
	}
	
	@RequestMapping(value="/company", method=RequestMethod.PUT)
	public @ResponseBody TransactionResult updateInfo(@RequestBody CompanyInfo info){
		
		EntityManager em = Context.getCurrent().getEntityManager();
		
		em.getTransaction().begin();
		
		info.setId(1);
		em.merge(info);
		
		em.getTransaction().commit();
		
		Context.getCurrent().setCompanyInfo(info);
		
		return new TransactionResult(true);
	}
	
}
