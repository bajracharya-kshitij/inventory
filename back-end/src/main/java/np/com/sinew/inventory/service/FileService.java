package np.com.sinew.inventory.service;

import java.io.FileNotFoundException;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import np.com.sinew.inventory.model.File;
import np.com.sinew.inventory.model.Product;

public interface FileService {

	File create(MultipartFile multipartFile, Product product) throws Exception;

	Resource loadFileAsResource(String hash) throws FileNotFoundException;
}
