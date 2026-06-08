from fastapi import APIRouter
from src.http_client import CMCHTTPClient
from src.config import settings

router = APIRouter(
    prefix="/cryptocurrency"
)

cmchttpclient = CMCHTTPClient(
    base_url="https://pro-api.coinmarketcap.com",
    api_key=settings.API_Key  
)

@router.get("")
async def get_cryptocurrency():
    return await cmchttpclient.get_listings()

@router.get("/{currency_id}")
async def get_cryptocurrency_id(currency_id: int):
    return await cmchttpclient.get_currency(currency_id)