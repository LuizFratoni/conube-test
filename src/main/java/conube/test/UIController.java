package conube.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UIController {
	
	@RequestMapping("/")
	public ModelAndView getHome(){
		ModelAndView view = new ModelAndView("home");
		
		Context ctx = Context.getCurrent();
		//view.getModel().put("company", ctx.getCompanyInfo());
		view.addObject("company", ctx.getCompanyInfo());
		
		System.out.println("Página principal");

		return view;
	}
	
}
