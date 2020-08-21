package server.pkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.pkg.model.User;
import server.pkg.model.userSession;

@Repository
public interface userSessionRepository extends JpaRepository<userSession,Long> {
}
