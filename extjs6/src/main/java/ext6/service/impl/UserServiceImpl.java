package ext6.service.impl;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import ext6.service.ex.*;
import net.sf.json.JSONObject;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ext6.entity.User;
import ext6.mapper.UserMapper;
import ext6.service.IUserService;


/**
 * 用户数据的业务层
 */
@Service("userService")
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserMapper userMapper;

	public User reg(User user)
			throws UsernameConflictException,
			InsertDataException {
		User data = findUserByUsername(user.getUsername());
		// 判断是否查询到数据
		if (data != null) {
			// 是：查询到数据，即用户名被占用，则抛出UsernameConflictException异常
			throw new UsernameConflictException(
					"尝试注册的用户名(" + user.getUsername() + ")已经被占用！");
		} else {
			// 否：没有查询到数据，即用户名没有被占用，则执行插入用户数据，获取返回值
			User result = insert(user);
			// 执行返回
			return result;
		}
	}

	public User login(
			String username, String password)
            throws UserNotFoundException,PasswordNotMatchException {
		// 验证用户名与密码的格式是否正确


		// 根据用户名查询用户数据
		User user = findUserByUsername(username);
		// 判断是否查询到数据
		if (user != null) {
			if (user.getPassword().equals(password)) {
				// 是：返回用户数据

				return user;
			} else {
				// 否：密码不正确，抛出PasswordNotMacthException异常
				throw new PasswordNotMatchException(
						"密码错误！");
			}
		} else {
			// 否：没有与用户名匹配的数据，则抛出UserNotFoundException异常
			throw new UserNotFoundException(
					"尝试登录的用户名(" + username + ")不存在！");
		}
	}




	public User findUserById(Integer id) {
		return userMapper.findUserById(id);
	}

	public List<User> findAll() {
		return userMapper.findAll();
	}

	public List<User> find(String username, Integer sex) {
		return userMapper.find(username, sex);
	}

	public void delete(Integer id) {
		userMapper.deleteById(id);
	}
	/*--------------------------------------------------*/

	/**
	 * 根据用户名查询用户数据
	 * @param username 用户名
	 * @return 匹配的用户数据，如果没有匹配的数据，则返回null
	 */
	private User findUserByUsername(String username) {
		return userMapper.findUserByUsername(username);
	}


	/**
	 * 插入用户数据
	 * @param user 用户数据
	 * @return 成功插入的用户数据
	 */
	private User insert(User user) {
		// 插入用户数据
		Integer rows = userMapper.insert(user);
		if (rows == 1) {
			return user;
		} else {
			throw new InsertDataException("增加用户数据时发生未知错误！请联系系统管理员！");
		}
	}



}




















