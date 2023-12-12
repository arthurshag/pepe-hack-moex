from pydantic import BaseModel
from datetime import datetime, date
from enum import Enum


class BotActionType(Enum):
    PURCHASE = "Покупка"
    SELL = "Продажа"


class BotActionColor(Enum):
    GREEN = "#AAFF00"
    RED = "#FF5733"


class BotAction(BaseModel):
    user_id: int
    company_name: str
    stocks_count: int
    action: BotActionType
    action_color: BotActionColor
    profit: float
    comment: str
    datetime: datetime | date
