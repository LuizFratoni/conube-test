package conube.test;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import conube.test.data.Invoice;
import conube.test.data.InvoiceTaxes;

@Controller
public class InvoiceController {

	@RequestMapping(value="/invoices", method=RequestMethod.GET)
	public @ResponseBody Object getInvoices(){
		EntityManager em = Context.getCurrent().getEntityManager();
		
		return em.createQuery("select p from Invoice p", Invoice.class).getResultList().toArray();
		
	}
	
	@RequestMapping(value="/invoice/{id}", method=RequestMethod.GET)
	public @ResponseBody Object getInvoice(@PathVariable("id") String sid){
		EntityManager em = Context.getCurrent().getEntityManager();
		Invoice invoice = em.find(Invoice.class, Integer.parseInt(sid));
		
		
		return invoice;
	}
	
	@RequestMapping(value="/invoices", method=RequestMethod.POST)
	public @ResponseBody TransactionResult createInvoice(@RequestBody Invoice info){
		System.out.println("Createing Invoice - "+info.getDescription()+" : "+Double.toString(info.getAmount()));
		
		EntityManager em = Context.getCurrent().getEntityManager();
		
		em.getTransaction().begin();
		
		em.persist(info);
		
		em.getTransaction().commit();
		
		System.out.println("Invoice ID: "+Integer.toString(info.getId()));
		
		return new TransactionResult(true, info.getId());
	}

	@RequestMapping(value="/invoices/{id}/taxes", method=RequestMethod.GET)
	public @ResponseBody InvoiceTaxes getInvoiceTaxes(@PathVariable("id") String id){
		
		System.out.println("Carregando Impostos da Invoice");
		EntityManager em = Context.getCurrent().getEntityManager();
		Invoice invoice = em.find(Invoice.class, Integer.parseInt(id));
		
		if (invoice == null) return null;
		
		return new InvoiceTaxes(invoice.getAmount(), Context.getCurrent().getCompanyInfo());
		
	}
	
	@RequestMapping(value="/invoices/taxesCalc", method=RequestMethod.POST)
	public @ResponseBody InvoiceTaxes calculateTaxes(@RequestBody Invoice invoice){
		
		
		if (invoice == null) return null;
		
		return new InvoiceTaxes(invoice.getAmount(), Context.getCurrent().getCompanyInfo());
		
	}
	
	
	
	
}
