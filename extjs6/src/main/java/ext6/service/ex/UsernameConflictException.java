package ext6.service.ex;

/**
 * �û�����ͻ�쳣��ͨ�����ڳ���ע���Ѵ��ڵ��û���ʱ�׳�
 */
public class UsernameConflictException 
	extends ServiceException {

	private static final long serialVersionUID = -4106401894279090959L;

	public UsernameConflictException() {
		super();
	}

	public UsernameConflictException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UsernameConflictException(String message, Throwable cause) {
		super(message, cause);
	}

	public UsernameConflictException(String message) {
		super(message);
	}

	public UsernameConflictException(Throwable cause) {
		super(cause);
	}
	
}
