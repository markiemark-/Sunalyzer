import requests
import logging

class p2meter:
    def __init__(self, config):
        # Demo code for config access
        self.url_inverter = ("http://192.168.2.13/api/v2/sm/actual")

        # Initialize with default values
        self.total_energy_produced_kwh = 0.0
        self.total_energy_consumed_kwh = 0.0
        self.total_energy_fed_in_kwh = 0.0
        self.current_power_consumed_from_grid_kw = 0.0
        self.current_power_consumed_from_pv_kw = 0.0
        self.current_power_consumed_total_kw = 0.0
        self.current_power_fed_in_kw = 0.0
        self.current_power_produced_kw = 0.0

        # Test connection by doing an initial update
        try:
            self.update()
        except Exception:
            logging.error(
                "Fronius device: Error: connecting to the device failed")
            raise

    def copy_data(self, data):
        '''Copies the results from the API request.'''
        # Tijdstempel verwerken

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
        total_energy_produced_kwh = 440.0
        current_power_produced_kw = 3.0
        current_power_consumed_from_pv_kw = 1.0

        self.total_energy_produced_kwh = total_energy_produced_kwh
        self. total_energy_consumed_kwh = total_energy_consumed_kwh
        self.total_energy_fed_in_kwh = total_energy_fed_in_kwh
        self.current_power_consumed_from_grid_kw = current_power_consumed_from_grid_kw
        self.current_power_consumed_from_pv_kw = current_power_consumed_from_pv_kw
        self.current_power_consumed_total_kw = current_power_consumed_total_kw
        self.current_power_fed_in_kw = current_power_fed_in_kw
        self.current_power_produced_kw = current_power_produced_kw



    def update(self):
        '''Updates all device stats.'''
        try:
            # Query inverter data
            r_inverter = requests.get(self.url_inverter, timeout=5)
            r_inverter.raise_for_status()

            self.copy_data(r_inverter.json()) # Null meter data
        except requests.exceptions.Timeout:
            logging.error(f"Fronius device: Timeout requesting "
                          f"'{self.url_inverter}'")
            raise
        except requests.exceptions.RequestException as e:
            logging.error(f"Fronius device: requests exception {e} for URL "
                          f"'{self.url_inverter}'")
            raise
