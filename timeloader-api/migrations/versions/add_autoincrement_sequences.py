"""add autoincrement sequences for integer ids

Revision ID: addautoincseq
Revises: e9108436472d
Create Date: 2026-02-28 12:10:00.000000
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'addautoincseq'
# chain this after the earlier per-page sequence migration to keep history linear
down_revision: Union[str, Sequence[str], None] = 'c3acb0779438'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # create sequence and set default for each table
    tables = [
        ('users', 'user_id'),
        ('pages', 'page_id'),
        ('activities', 'activity_id'),
        ('timesheets', 'timesheet_id'),
        ('program_user_institution', 'id'),
        ('program_approvers', 'id'),
        ('programs', 'program_id'),
        ('institutions', 'institution_id'),
        ('institution_to_user', 'id'),
    ]
    for tbl, col in tables:
        seq = f"{tbl}_{col}_seq"
        op.execute(f"CREATE SEQUENCE IF NOT EXISTS {seq};")
        op.execute(f"ALTER TABLE {tbl} ALTER COLUMN {col} SET DEFAULT nextval('{seq}');")


def downgrade() -> None:
    # remove defaults; sequences may remain
    tables = [
        ('users', 'user_id'),
        ('pages', 'page_id'),
        ('activities', 'activity_id'),
        ('timesheets', 'timesheet_id'),
        ('program_user_institution', 'id'),
        ('program_approvers', 'id'),
        ('programs', 'program_id'),
        ('institutions', 'institution_id'),
        ('institution_to_user', 'id'),
    ]
    for tbl, col in tables:
        op.execute(f"ALTER TABLE {tbl} ALTER COLUMN {col} DROP DEFAULT;")
