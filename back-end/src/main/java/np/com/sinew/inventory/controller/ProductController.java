package np.com.sinew.inventory.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import np.com.sinew.inventory.model.Product;
import np.com.sinew.inventory.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	private ProductService productService;

	@PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public Product create(HttpServletRequest request, 
							@RequestParam(value="image", required=false) MultipartFile image) throws Exception {
		return productService.create(request, image);
	}
	
	@GetMapping(value = "/list")
	public List<Product> list() {
		return productService.findAll();
	}
}
