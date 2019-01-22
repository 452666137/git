package mapper;

import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import ext6.entity.User;
import ext6.mapper.UserMapper;

public class UserMapperTestCase {
	
	private AbstractApplicationContext ac;
	private UserMapper userMapper;
	

	
	@Test
	public void findUserById() {
		Integer id = 5;
		User user = userMapper.findUserById(id);
		System.out.println(user);
	}
	
	@Test
	public void insert() {
		User user = new User();
		user.setUsername("zzz");
		user.setPassword("zzz");
		Integer rows = userMapper.insert(user);
		System.out.println("rows=" + rows);
		System.out.println(user);
	}
	
	@Test
	public void findUserByUsername() {
		String username = "aaa";
		User user
			= userMapper.findUserByUsername(username );
		System.out.println(user);
	}

	@Test
	public void findAll() {
		List<User> all = userMapper.findAll();
		System.out.println(all);
	}
	@Test
	public void find() {
		List<User> all = userMapper.find(null,1);
		System.out.println(all);
	}
	@Before
	public void doBefore() {
		ac = new ClassPathXmlApplicationContext(
			"spring-dao.xml");
		userMapper = ac.getBean("userMapper",
			UserMapper.class);
	}
	
	@After
	public void doAfter() {
		ac.close();
	}
	
}
