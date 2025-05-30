import requests
import logging
from datetime import datetime
from ..logger import get_logger

# from .device import Device

#class p1meter(Device):
class p1meter:
    def __init__(self, config):
        self.config = config
        self.logger = get_logger(__name__)
        self.url = config.get("url", "http://192.168.2.13/api/v2/sm/actual")




    def get_data(self):
        try:
            self.logger.info(f"Bezig met ophalen van gegevens van P1-meter via {self.url}")
            response = requests.get(self.url, timeout=5)
            response.raise_for_status()
            data = response.json()
            self.logger.info("Succesvol gegevens ontvangen van P1-meter")

        except Exception as e:
            self.logger.error(f"Fout bij ophalen van P1-meter data: {e}")
            return None

        try:
            # Tijdstempel verwerken
            timestamp_str = data.get("timestamp", {}).get("value", "")
            timestamp = datetime.strptime(timestamp_str[:12], "%y%m%d%H%M%S")

            # Energieverbruik en -teruglevering
            energy_delivered_t1 = data.get("energy_delivered_tariff1", {}).get("value", 0.0)
            energy_delivered_t2 = data.get("energy_delivered_tariff2", {}).get("value", 0.0)
            energy_delivered_t3 = data.get("energy_delivered_tariff3", {}).get("value", 0.0)
            energy_returned_t1 = data.get("energy_returned_tariff1", {}).get("value", 0.0)
            energy_returned_t2 = data.get("energy_returned_tariff2", {}).get("value", 0.0)
            energy_returned_t3 = data.get("energy_returned_tariff3", {}).get("value", 0.0)

            # Vermogen
            power_delivered = data.get("power_delivered", {}).get("value", 0.0)
            power_returned = data.get("power_returned", {}).get("value", 0.0)
            power_delivered_l1 = data.get("power_delivered_l1", {}).get("value", 0.0)
            power_delivered_l2 = data.get("power_delivered_l2", {}).get("value", 0.0)
            power_delivered_l3 = data.get("power_delivered_l3", {}).get("value", 0.0)
            power_returned_l1 = data.get("power_returned_l1", {}).get("value", 0.0)
            power_returned_l2 = data.get("power_returned_l2", {}).get("value", 0.0)
            power_returned_l3 = data.get("power_returned_l3", {}).get("value", 0.0)

            # Berekeningen
            total_energy_consumed_kwh = energy_delivered_t1 + energy_delivered_t2 + energy_delivered_t3
            total_energy_fed_in_kwh = energy_returned_t1 + energy_returned_t2 + energy_returned_t3
            current_power_consumed_from_grid_kw = power_delivered_l1 + power_delivered_l2 + power_delivered_l3
            current_power_fed_in_kw = power_returned_l1 + power_returned_l2 + power_returned_l3
            current_power_consumed_total_kw = power_delivered - power_returned

            # Placeholder voor nog niet beschikbare gegevens
            total_energy_produced_kwh = None
            current_power_produced_kw = None
            current_power_consumed_from_pv_kw = None

            self.logger.debug(f"P1-meter data op {timestamp}:")
            self.logger.debug(f"  Totaal verbruikt: {total_energy_consumed_kwh} kWh")
            self.logger.debug(f"  Totaal teruggeleverd: {total_energy_fed_in_kwh} kWh")
            self.logger.debug(f"  Huidig verbruik van net: {current_power_consumed_from_grid_kw} kW")
            self.logger.debug(f"  Huidige teruglevering aan net: {current_power_fed_in_kw} kW")
            self.logger.debug(f"  Totaal huidig verbruik: {current_power_consumed_total_kw} kW")

            return {
                "timestamp": timestamp,
                "total_energy_consumed_kwh": total_energy_consumed_kwh,
                "total_energy_fed_in_kwh": total_energy_fed_in_kwh,
                "current_power_consumed_from_grid_kw": current_power_consumed_from_grid_kw,
                "current_power_fed_in_kw": current_power_fed_in_kw,
                "current_power_consumed_total_kw": current_power_consumed_total_kw,
                "total_energy_produced_kwh": total_energy_produced_kwh,
                "current_power_produced_kw": current_power_produced_kw,
                "current_power_consumed_from_pv_kw": current_power_consumed_from_pv_kw
            }

        except Exception as e:
            self.logger.error(f"Fout bij verwerken van P1-meter data: {e}")
            return None
