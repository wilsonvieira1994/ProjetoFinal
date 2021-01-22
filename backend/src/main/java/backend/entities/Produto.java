package backend.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "produto")
public class Produto implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String descricao;
	private Double valorUnitario;
	private Integer quantidade;

	@ManyToOne
	@JoinColumn(name = "id_categoria")
	private Categoria categoria;

	@ManyToOne
	@JoinColumn(name = "id_marca")
	private Marca marca;

	@ManyToOne
	@JoinColumn(name = "id_fornecedor")
	private Fornecedor fornecedor;

	@JsonIgnore
	@OneToMany(mappedBy = "produto", cascade = CascadeType.ALL)
	private List<Faq> faqs = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "produto", cascade = CascadeType.ALL)
	private List<ItensVenda> itensVendas = new ArrayList<>();

	public Produto() {
	}

	public Produto(Integer id, String nome, String descricao, Double valorUnitario, Integer quantidade,
			Categoria categoria, Marca marca, Fornecedor fornecedor) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.valorUnitario = valorUnitario;
		this.quantidade = quantidade;
		this.categoria = categoria;
		this.marca = marca;
		this.fornecedor = fornecedor;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getValorUnitario() {
		return valorUnitario;
	}

	public void setValorUnitario(Double valorUnitario) {
		this.valorUnitario = valorUnitario;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public Marca getMarca() {
		return marca;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public List<Faq> getFaqs() {
		return faqs;
	}

	public void setFaqs(List<Faq> faq) {
		this.faqs = faq;
	}

	public List<ItensVenda> getItensVendas() {
		return itensVendas;
	}

	public void setItensVendas(List<ItensVenda> itensVenda) {
		this.itensVendas = itensVenda;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public void setMarca(Marca marca) {
		this.marca = marca;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produto other = (Produto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
