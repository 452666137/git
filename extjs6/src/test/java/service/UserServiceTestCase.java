package service;

import ext6.service.ex.ServiceException;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import ext6.entity.User;
import ext6.service.IUserService;

import java.util.List;

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

	@Test
	public void reg() {
		try {
			User user = new User();
			user.setUsername("xxx");
			user.setPassword("xxx");
			User result = userService.reg(user);
			System.out.println(result);
		} catch (ServiceException e) {
			System.out.println(e.getMessage());
		}
	}

	@Test
	public void findAll() {
		try {
			List<User> all = userService.findAll();
			System.out.println(all);
		} catch (ServiceException e) {
			System.out.println(e.getMessage());
		}
	}

	@Test
	public void find() {
		try {
			List<User> all = userService.find("aaa", 1);
			System.out.println(all);
		} catch (ServiceException e) {
			System.out.println(e.getMessage());
		}
	}

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
