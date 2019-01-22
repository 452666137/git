package ext6.controller;


import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ext6.entity.ResponseResult;
import ext6.entity.User;
import ext6.service.IUserService;

import java.util.List;


@Controller
@RequestMapping("/user")
public class UserController extends BaseController {


	@Autowired
	private IUserService userService;


	@RequestMapping(value="/del.do",
			method=RequestMethod.GET)
	@ResponseBody
	public ResponseResult<Void> del(@Param("id")Integer id) {

		// 调用业务层对象实现注册
		userService.delete(id);
		// 执行返回
		return new ResponseResult<Void>();
	}

	@RequestMapping(value="/find.do",
			method=RequestMethod.POST)
	@ResponseBody
	public ResponseResult<List<User>> handlefind(@Param("username")String username,
												 @Param("sex")Integer sex) {
		System.out.println(username+sex);
		ResponseResult<List<User>> rr = new ResponseResult<List<User>>();
		// 调用业务层对象实现注册
		List<User> all = userService.find(username, sex);
		rr.setData(all);
		// 执行返回
		return rr;
	}

	@RequestMapping(value="/handle_list.do",
			method=RequestMethod.POST)
	@ResponseBody
	public ResponseResult<List<User>> handleList() {
		ResponseResult<List<User>> rr = new ResponseResult<List<User>>();
		// 调用业务层对象实现注册
		List<User> all = userService.findAll();
		rr.setData(all);
		// 执行返回
		return rr;
	}

	@RequestMapping(value="/handle_reg.do",
			method=RequestMethod.POST)
	@ResponseBody
	public ResponseResult<Void> handleReg(User user) {

		// 调用业务层对象实现注册
		userService.reg(user);
		// 执行返回
		return new ResponseResult<Void>();
	}

	@RequestMapping(value="/handle_login.do",
			method=RequestMethod.POST)
	@ResponseBody
	public ResponseResult<Void> handleLogin(
			@RequestParam("username") String username,
			@RequestParam("password") String password,
			HttpSession session){

		// 调用业务层对象的login()方法，并获取返回值
		User user =	userService.login(username, password);
		// 将用户id和用户名封装到session中
		session.setAttribute("uid", user.getId());
		session.setAttribute("username", user.getUsername());
		// 返回
		return new ResponseResult<Void>();
	}


}







