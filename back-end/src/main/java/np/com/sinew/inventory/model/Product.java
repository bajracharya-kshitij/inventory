package np.com.sinew.inventory.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "product")
@Data
@NoArgsConstructor @AllArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable=false, updatable=false)
	private Long id;
	
	@NotBlank(message = "Name must not be blank")
	@NotNull(message = "Name must not be empty")
	@Size(min = 2, max = 32, message = "Name must be between 2 and 32 characters long")
	@Column(name="name")
	private String name;
	
	@NotBlank(message = "Company name must not be blank")
	@NotNull(message = "Company name must not be empty")
	@Size(min = 2, max = 32, message = "Company name must be between 2 and 32 characters long")
	@Column(name="company")
	private String company;
	
	@DecimalMin(value="0.0", inclusive=false, message="Price must be greater than 0")
	@Column(name="price")
	private BigDecimal price;
}
