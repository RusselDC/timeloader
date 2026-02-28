"""Package-level entrypoint for models.

Importing ``models`` will load *all* model modules in a deterministic order so
that SQLAlchemy's declarative base can configure mappers without encountering
``InvalidRequestError`` due to unresolved string relationships.

Individual modules are still free to use string names in ``relationship()``
calls; the point of this package file is simply to ensure they are imported
once, and to give a single place for other parts of the application (migrations
env, routers, tests, etc.) to grab ``Base`` and/or particular classes if
desired.
"""

from .main import Base

# import in dependency order: models that others depend on first.
from .institution import Institution
from .program import Program
from .page import Page
from .user import User
from .activity import Activity
from .program_approvers import ProgramApprover
from .program_user_institution import InstitutionProgramUser
from .timesheet import Timesheet

__all__ = [
    "Base",
    "Institution",
    "Program",
    "Page",
    "User",
    "Activity",
    "ProgramApprover",
    "InstitutionProgramUser",
    "Timesheet",
]
