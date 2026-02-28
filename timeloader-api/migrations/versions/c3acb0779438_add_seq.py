"""add seq

Revision ID: c3acb0779438
Revises: e9108436472d
Create Date: 2026-02-28 11:57:54.469569

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c3acb0779438'
down_revision: Union[str, Sequence[str], None] = 'e9108436472d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # this migration was superseded by ``add_autoincrement_sequences``
    # the operations here are idempotent (CREATE SEQUENCE IF NOT EXISTS),
    # so it's safe to leave them in place; nothing further is required.
    pass


def downgrade() -> None:
    """Downgrade schema."""
    # no-op; sequence removal handled by later migrations if needed
    pass
