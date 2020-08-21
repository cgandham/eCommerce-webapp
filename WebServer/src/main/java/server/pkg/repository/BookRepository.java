package server.pkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.pkg.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {

}
