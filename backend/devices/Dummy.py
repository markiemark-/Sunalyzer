# Dummy device for testing purposes
class Dummy:
    def __init__(self, config):
        # Demo code for config access
        # print(f"""Dummy device: config test -
        #    foo={config.config_data['dummy']['foo']}
        #    bar={config.config_data['dummy']['bar']}""")

        # Initialize with some random values
        self.total_energy_produced_kwh = 440.0   # Geproduceerd totaal door zonnepanelen   totaal uit API zonnepanelen
        self.total_energy_consumed_kwh = 390.0   # gebruikt       Delivered totaal van P1 meter
        self.total_energy_fed_in_kwh = 240.0     # teruggeleverd  returned totaal van P1 meter

        self.current_power_produced_kw = 3.0              # Nu geleverd door zonnepanenen 
        self.current_power_consumed_from_grid_kw = 0.0    # Nu gebruikt   Delivered actueel van P1 meter  => power_delivered (L1,2,3)
        self.current_power_consumed_from_pv_kw = 1.0      # Zonnepanelen actueel - huidig treruggeleverd van P1
        self.current_power_consumed_total_kw = 1.0        # huidige gebruik  van P1 
        self.current_power_fed_in_kw = 2.0                # huidige teruglevering P1     =>  power_returned (L1,2,3)




    # Increment the values on each update, just so something changes
    def update(self):
        '''Increment the values on each update, just so something changes.'''
        self.total_energy_produced_kwh = self.total_energy_produced_kwh + 1
        self.total_energy_consumed_kwh = self.total_energy_consumed_kwh + 1
        self.total_energy_fed_in_kwh = self.total_energy_fed_in_kwh + 1

        # self.current_power_produced_kw = self.current_power_produced_kw
        # self.current_power_consumed_from_grid_kw = self.current_power_consumed_from_grid_kw
        # self.current_power_consumed_from_pv_kw = self.current_power_consumed_from_pv_kw
        # self.current_power_consumed_total_kw = self.current_power_consumed_total_kw
        # self.current_power_fed_in_kw = self.current_power_fed_in_kw
