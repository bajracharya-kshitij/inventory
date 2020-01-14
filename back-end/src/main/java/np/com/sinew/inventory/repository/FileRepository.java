package np.com.sinew.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import np.com.sinew.inventory.model.File;

public interface FileRepository extends JpaRepository<File, Long>{

}
