package np.com.sinew.inventory.util;

import java.math.BigDecimal;

public final class ParserUtil {

	private ParserUtil() {
		throw new IllegalStateException("Utility class");
	}
	
	public static String parseText(String text) {
		if (text == null) {
			return null;
		}
		text = text.trim();
		if (text.equals("") || text.equals("null")) {
			return null;
		}
		return text;
	}
	
	public static BigDecimal parseBigDecimal(String text) {
		String value = parseText(text);
		if (value != null) {
			return new BigDecimal(value);
		}
		return null;
	}
}