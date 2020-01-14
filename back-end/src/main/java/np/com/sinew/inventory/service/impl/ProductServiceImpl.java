package np.com.sinew.inventory.service.impl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import np.com.sinew.inventory.model.File;
import np.com.sinew.inventory.model.Product;
import np.com.sinew.inventory.repository.ProductRepository;
import np.com.sinew.inventory.service.FileService;
import np.com.sinew.inventory.service.ProductService;
import np.com.sinew.inventory.util.ParserUtil;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private FileService fileService;
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product create(HttpServletRequest request, MultipartFile image) throws Exception {
		Product product = Product.builder()
								.name(ParserUtil.parseText(request.getParameter("name")))
								.company(ParserUtil.parseText(request.getParameter("company")))
								.price(ParserUtil.parseBigDecimal(request.getParameter("price")))
								.build();
		product = productRepository.save(product);
		if (image != null && image.getSize() > 0) {
			File file = fileService.create(image, product);
			product.addImage(file);
			product = productRepository.save(product);
		}
		return product;
	}

	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

}
