package ext6.mapper;


import ext6.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {

	Integer insert(User user);
	/**
	 * 根据用户名查询用户数据
	 * @param username 用户名
	 * @return 匹配的用户数据，如果没有匹配的数据，则返回null
	 */
	User findUserByUsername(String username);

	/**
	 * 根据用户id查询用户数据
	 * @param id 用户id
	 * @return 匹配的用户数据，如果没有匹配的数据，则返回null
	 */
	User findUserById(Integer id);

	List<User> findAll();

	List<User> find(@Param("username")String username,
					@Param("sex")Integer sex);

	Integer deleteById(Integer id);

}




