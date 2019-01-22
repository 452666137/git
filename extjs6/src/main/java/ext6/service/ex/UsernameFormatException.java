package ext6.service.ex;

/**
 * �û�����ʽ�쳣
 * 
 * @see TextFormatException
 */
public class UsernameFormatException
	extends TextFormatException {

	private static final long serialVersionUID = 8661983413228444819L;

	public UsernameFormatException() {
		super();
	}

	public UsernameFormatException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UsernameFormatException(String message, Throwable cause) {
		super(message, cause);
	}

	public UsernameFormatException(String message) {
		super(message);
	}

	public UsernameFormatException(Throwable cause) {
		super(cause);
	}

}
