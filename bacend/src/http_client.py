import ssl
import certifi
from aiohttp import ClientSession, TCPConnector

class HTTPClient:
    def __init__(self, base_url: str, api_key: str):
        self._base_url = base_url
        self._api_key = api_key
        self._session = None
    
    async def _get_session(self):
        if self._session is None or self._session.closed:
            # Используем сертификаты из пакета certifi
            ssl_context = ssl.create_default_context(cafile=certifi.where())
            
            connector = TCPConnector(ssl=ssl_context)
            
            self._session = ClientSession(
                base_url=self._base_url,
                headers={
                    "X-CMC_PRO_API_KEY": self._api_key
                },
                connector=connector
            )
        return self._session

class CMCHTTPClient(HTTPClient):
    async def get_listings(self):
        session = await self._get_session()
        async with session.get("/v1/cryptocurrency/listings/latest") as resp:
            result = await resp.json()
            return result["data"]
        
    async def get_currency(self, curr_id: int):
        session = await self._get_session()
        async with session.get(
            "/v2/cryptocurrency/quotes/latest",
            params={"id": curr_id}
        ) as resp:
            result = await resp.json()
            return result["data"][str(curr_id)]