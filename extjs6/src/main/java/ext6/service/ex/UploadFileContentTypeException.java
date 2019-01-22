package ext6.service.ex;

/**
 * �ϴ��ļ������쳣
 */
public class UploadFileContentTypeException 
	extends ServiceException {

	private static final long serialVersionUID = 273919517520300239L;

	public UploadFileContentTypeException() {
		super();
	}

	public UploadFileContentTypeException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UploadFileContentTypeException(String message, Throwable cause) {
		super(message, cause);
	}

	public UploadFileContentTypeException(String message) {
		super(message);
	}

	public UploadFileContentTypeException(Throwable cause) {
		super(cause);
	}

}
