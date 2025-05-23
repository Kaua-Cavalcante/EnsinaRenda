from sqlalchemy.orm import Session
from backend.app.model import Usuario

class UsuarioRepository:
    def __init__(self, db: Session):
        self.db = db

    def criar_usuario(self, usuario: UsuarioCreate) -> Usuario:
        """Apenas operações de banco, sem validações"""
        db_usuario = Usuario(
            nome=usuario.nome,
            email=usuario.email.lower(),
            senha=usuario.senha_hash,  # Assume que já veio hasheado
            data_nascimento=usuario.data_nascimento
        )
        self.db.add(db_usuario)
        self.db.commit()
        self.db.refresh(db_usuario)
        return db_usuario

    # Outros métodos...