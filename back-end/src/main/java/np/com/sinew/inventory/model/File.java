package np.com.sinew.inventory.model;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import np.com.sinew.inventory.util.ConstantsUtil;

@Entity(name = "file")
@Getter @Setter
@AllArgsConstructor @RequiredArgsConstructor
@Builder
public class File extends Auditor {

	@NotBlank(message = "Name must not be blank")
	@NotNull(message = "Name must not be empty")
	@Column(name = "name")
	private String name;
	
	@Column(name = "size")
	private long size;
	
	@NotBlank(message = "Mime type must not be blank")
	@NotNull(message = "Mime type must not be empty")
	@Column(name = "mime_type")
	private String mimeType;
	
	@NotBlank(message = "Hash must not be blank")
	@NotNull(message = "Hash must not be empty")
	@Column(name = "hash", unique = true)
	private String hash;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;
	
	public void setHash() throws NoSuchAlgorithmException {
		String transformedName = new StringBuilder().append(this.name).append(this.mimeType).append(this.size)
				.append(new Date().getTime()).toString();
		MessageDigest messageDigest = MessageDigest.getInstance("MD5");
		messageDigest.update(transformedName.getBytes(StandardCharsets.UTF_8));
		this.hash = new BigInteger(1, messageDigest.digest()).toString(ConstantsUtil.MIN_RADIX);
	}
}
