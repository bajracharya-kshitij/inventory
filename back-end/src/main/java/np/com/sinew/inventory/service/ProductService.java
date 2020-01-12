package np.com.sinew.inventory.service;

import java.util.List;

import np.com.sinew.inventory.model.Product;

public interface ProductService {

	Product create(Product product);

	List<Product> findAll();
}
