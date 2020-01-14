package np.com.sinew.inventory.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import np.com.sinew.inventory.model.Product;

public interface ProductService {

	Product create(HttpServletRequest request, MultipartFile image) throws Exception;

	List<Product> findAll();
}
