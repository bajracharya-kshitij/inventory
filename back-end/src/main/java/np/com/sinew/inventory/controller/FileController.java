package np.com.sinew.inventory.controller;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import np.com.sinew.inventory.service.FileService;

@Controller
@RequestMapping("/api/file/")
public class FileController {

	@Autowired
	private FileService fileService;
	
	@GetMapping(value = "{hash}", produces = { MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE })
	public @ResponseBody byte[] getJpegImage(@PathVariable("hash") String hash) throws IOException {
		Resource resource = fileService.loadFileAsResource(hash);
		InputStream in = resource.getInputStream();
		return IOUtils.toByteArray(in);
	}
}
