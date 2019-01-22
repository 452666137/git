package ext6.service;

import ext6.entity.User;
import ext6.service.ex.*;

import java.util.List;

public interface IUserService {

	User reg(User user)
			throws UsernameConflictException,
			UsernameFormatException,
			PasswordFormatException;

	/**
	 * 用户登录
	 * @param username 用户名
	 * @param password 密码
	 * @return 成功登录的用户信息
	 */
	User login(String username, String password)
			throws UserNotFoundException,
			PasswordNotMatchException;

	List<User> findAll();

	List<User> find(String username, Integer sex);

	void delete(Integer id);
}




