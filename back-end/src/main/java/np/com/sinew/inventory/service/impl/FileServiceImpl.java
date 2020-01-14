package np.com.sinew.inventory.service.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import np.com.sinew.inventory.model.File;
import np.com.sinew.inventory.model.Product;
import np.com.sinew.inventory.property.FileStorageProperties;
import np.com.sinew.inventory.repository.FileRepository;
import np.com.sinew.inventory.service.FileService;
import np.com.sinew.inventory.util.FileUtil;

@Service
public class FileServiceImpl implements FileService {
	
	@Autowired
	private FileRepository fileRepository;
	
	private final Path fileStorageLocation;
	
	@Autowired
	public FileServiceImpl(FileStorageProperties fileStorageProperties) throws IOException {
		this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDirectory()).toAbsolutePath().normalize();
		Files.createDirectories(this.fileStorageLocation);
	}

	@Override
	public File create(MultipartFile multipartFile, Product product) throws Exception {
		String originalFilename = multipartFile.getOriginalFilename();
		FileUtil.validateFilename(originalFilename);
		File file = File.builder()
						.name(originalFilename)
						.mimeType(multipartFile.getContentType())
						.size(multipartFile.getSize())
						.product(product)
						.build();
		file.setHash();
		saveFileToDisk(multipartFile, file.getHash());
		return fileRepository.save(file);
	}
	
	@Override
	public Resource loadFileAsResource(String hash) throws FileNotFoundException {
		try {
			Path filePath = this.fileStorageLocation.resolve(hash).normalize();
			Resource resource = new UrlResource(filePath.toUri());
			if (resource.exists()) {
				return resource;
			} else {
				throw new FileNotFoundException("File not found " + hash);
			}
		} catch (MalformedURLException ex) {
			throw new FileNotFoundException("File not found " + hash);
		}
	}

	private void saveFileToDisk(MultipartFile multipartFile, String hash) throws Exception {
		Path targetLocation = this.fileStorageLocation.resolve(hash);
		Files.write(targetLocation, multipartFile.getBytes());
	}

}