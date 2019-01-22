package ext6.service.ex;

/**
 * �ϴ��ļ���С��������
 */
public class UploadFileSizeLimitException 
	extends ServiceException {

	private static final long serialVersionUID = -3863019659720600823L;

	public UploadFileSizeLimitException() {
		super();
	}

	public UploadFileSizeLimitException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UploadFileSizeLimitException(String message, Throwable cause) {
		super(message, cause);
	}

	public UploadFileSizeLimitException(String message) {
		super(message);
	}

	public UploadFileSizeLimitException(Throwable cause) {
		super(cause);
	}

}
