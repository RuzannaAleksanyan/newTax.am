from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    email = Column(
        String,
        unique=True,
        index=True,
        nullable=False
    )

    password = Column(
        String,
        nullable=False
    )

    companies = relationship(
        "Company",
        back_populates="owner"
    )

class Company(Base):

    __tablename__ = "companies"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    business_name = Column(
        String,
        nullable=False
    )

    legal_form = Column(
        String,
        nullable=False
    )

    tax_id = Column(
        String,
        nullable=False
    )

    registration_number = Column(
        String,
        nullable=False
    )

    registration_date = Column(
        String,
        nullable=False
    )

    business_activity = Column(
        String,
        nullable=False
    )

    country = Column(
        String,
        nullable=False
    )

    city = Column(
        String,
        nullable=False
    )

    legal_address = Column(
        String,
        nullable=False
    )

    owner = relationship(
        "User",
        back_populates="companies"
    )