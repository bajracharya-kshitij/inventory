package np.com.sinew.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import np.com.sinew.inventory.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}