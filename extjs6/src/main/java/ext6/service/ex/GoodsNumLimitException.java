package ext6.service.ex;

public class GoodsNumLimitException extends ServiceException {

	private static final long serialVersionUID = 3894560707507771269L;

	public GoodsNumLimitException() {
		super();
	}

	public GoodsNumLimitException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public GoodsNumLimitException(String message, Throwable cause) {
		super(message, cause);
	}

	public GoodsNumLimitException(String message) {
		super(message);
	}

	public GoodsNumLimitException(Throwable cause) {
		super(cause);
	}

}
