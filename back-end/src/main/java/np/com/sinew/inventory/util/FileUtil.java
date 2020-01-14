package np.com.sinew.inventory.util;

import java.util.Optional;

import org.springframework.util.StringUtils;

public final class FileUtil {

	private FileUtil() {
		throw new IllegalStateException("Utility class");
	}
	
	public static void validateFilename(String filename) throws Exception {
		Optional<String> optionalFilename = Optional.ofNullable(filename);
		if (!optionalFilename.isPresent()) {
			throw new Exception("Sorry! Filename missing");
		}
		String normalizedName = StringUtils.cleanPath(optionalFilename.get());
		// Check if the file's name contains invalid characters
		if (normalizedName.contains("..")) {
			throw new Exception("Sorry! Filename contains invalid path sequence " + normalizedName);
		}
	}
}
