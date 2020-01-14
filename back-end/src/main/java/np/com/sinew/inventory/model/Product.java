package np.com.sinew.inventory.model;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity(name = "product")
@Getter @Setter
@AllArgsConstructor @RequiredArgsConstructor
@Builder
public class Product extends Auditor {

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
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "product")
	@Builder.Default
	private Set<File> images = new HashSet<>();
	
	public void addImage(File file) {
		this.images.add(file);		
	}

	public void removeImage(File file) {
		if (!this.images.contains(file)) {
			return;
		}
		this.images.remove(file);
	}
}
