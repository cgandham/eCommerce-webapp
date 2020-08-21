package server.pkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.pkg.model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

}
