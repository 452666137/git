package ext6.test.service;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import ext6.entity.User;
import ext6.service.IUserService;

public class UserServiceTestCase {

	private AbstractApplicationContext ac;
	private IUserService userService;


	@Test
	public void login() {
			String username = "aaa";
			String password = "aaa";
			User user = userService.login(username, password);
			System.out.println("user=" + user);
	}

//	@Test
//	public void reg() {
//		try {
//			User user = new User();
//			user.setUsername("javascript");
//			user.setPassword("1234");
//			User result = userService.reg(user);
//			System.out.println(result);
//		} catch (ServiceException e) {
//			System.out.println(e.getMessage());
//		}
//	}
	@Before
	public void doBefore() {
		ac = new ClassPathXmlApplicationContext(
				"spring-dao.xml", "spring-service.xml");
		userService = ac.getBean("userService",
				IUserService.class);
	}

	@After
	public void doAfter() {
		ac.close();
	}
}
