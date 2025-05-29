let gLangEn = 1;
let gLangDe = 2;
let gLangNl = 3;
let gCurLang = gLangNl;

let translations = [
  // HTML element ID, English (1), German (2), Dutch (3)
  ["navbar_dropdown_language", "Language", "Sprache", "Taal"],
  ["sidebar_headline_overview", "Overview", "Übersicht", "Overzicht"],
  ["sidebar_today", "Today", "Heute", "Vandaag"],
  ["sidebar_statistics", "Statistics", "Statistiken", "Statistieken"],
  ["sidebar_headline_history", "History", "Historie", "Geschiedenis"],
  ["sidebar_by_day", "By Day", "Nach Tag", "Per dag"],
  ["sidebar_by_month", "By Month", "Nach Monat", "Per maand"],
  ["sidebar_by_year", "By Year", "Nach Jahr", "Per jaar"],
  ["sidebar_all_time", "All Time", "Gesamt", "Altijd"],
  ["sidebar_headline_misc", "Misc", "Sonstiges", "Diversen"],
  ["sidebar_csv", "CSV Download", "CSV-Download", "CSV-download"],
// Statistics
["headline_statistics", "Statistics", "Statistiken", "Statistieken"],
["stats_card_highest_prod", "Highest Production", "Höchste Erzeugung", "Hoogste productie"],
["stats_card_best_day", "Best Day", "Bester Tag", "Beste dag"],
["stats_card_best_month", "Best Month", "Bester Monat", "Beste maand"],
["stats_card_best_year", "Best Year", "Bestes Jahr", "Beste jaar"],
["stats_card_averages", "Averages ", "Durchschnittswerte", "Gemiddelden"],
["stats_card_runtime", "Runtime ", "Laufzeit", "Bedrijfstijd"],
["statistics_text_avg_daily_prod", "Average daily production ", "Durchschn. täglich erzeugt", "Gemiddelde dagelijkse productie"],
["statistics_text_start_date", "Date of commissioning ", "Inbetriebnahme der Anlage", "Ingebruiknamedatum"],
["statistics_text_runtime", "Total runtime ", "Laufzeit der Anlage", "Totale bedrijfstijd"],

// Dashboard
["dashboard_subtitle", "Last updated: ", "Letzte Aktualisierung: ", "Laatst bijgewerkt: "],
["dash_card_current", "Current", "Momentanwerte", "Actueel"],
["dash_card_today", "Today", "Heutige Werte", "Vandaag"],
["dash_card_all_time", "All Time", "Allzeit-Werte", "Altijd"],
["dash_card_24h", "Short Term History", "Aktueller Verlauf", "Korte termijn geschiedenis"],

["dash_text_today_produced", "Produced today", "Heute erzeugt", "Geproduceerd"],
["dash_text_today_consumed", "Consumed today", "Heute verbraucht", "Verbruikt"],
["dash_text_today_fed_in", "Fed in today", "Heute eingespeist", "Teruggeleverd"],
["dash_text_today_autarky", "Today's autarky", "Heutige Autarkie", "Zelfvoorziening"],
["dash_text_today_earned", "Earned today", "Heute verdient", "Verdiend"],

["dash_text_all_time_produced", "Produced in total", "Insgesamt erzeugt", "Geproduceerd"],
["dash_text_all_time_consumed", "Consumed in total", "Insgesamt verbraucht", "Verbruikt"],
["dash_text_all_time_fed_in", "Fed in total", "Insgesamt eingespeist", "Teruggeleverd"],
["dash_text_all_time_autarky", "Average autarky", "Durchschn. Autarkie", "Zelfvoorziening"],
["dash_text_all_time_earned", "Earned in total", "Insgesamt verdient", "Verdiend"],

// History
["history_card_earned", "Earnings", "Einnahmen", "Opbrengsten"],
["history_card_usage", "Produced", "Erzeugt", "Geproduceerd"],
["history_card_consumption", "Consumed", "Verbraucht", "Verbruikt"],
["history_text_produced", "Energy produced", "Erzeugte PV-Energie", "Geproduceerde energie"],
["history_text_earned_feedin", "Earned with feed-in", "Verdienst durch Einspeisung", "Opbrengst door teruglevering"],
["history_text_earned_self", "Saved via self-consumption", "Ersparnis durch Eigenverbrauch", "Besparing door eigenverbruik"],
["history_text_earned_total", "Total", "Summe", "Totaal"],
["history_text_fedin", "Fed into the grid", "Ins Netz eingespeist", "Teruggeleverd aan het net"],
["history_text_self_consumed", "Self consumed", "Selbst verbraucht", "Zelf verbruikt"],
["history_text_consumption_grid", "Consumption from grid", "Verbrauch aus dem Netz", "Verbruik uit het net"],
["history_text_consumption_self", "Consumption from PV", "Verbrauch aus PV", "Verbruik van PV"],
["history_text_consumption_total", "Total consumption", "Gesamtverbrauch", "Totaalverbruik"],
["history_card_graph_production_text", "Production Details", "Zeitverlauf der Erzeugung", "Productiedetails"],
["history_card_graph_consumption_text", "Consumption Details", "Zeitverlauf des Verbrauchs", "Verbruiksdetails"],
["history_card_autarky", "Autarky", "Autarkie", "Zelfvoorziening"],
["history_text_autarky", "Achieved autarky", "Erreichte Autarkie", "Bereikte Zelfvoorziening"],
["history_card_high_res_data_text", "Course of the Day", "Tagesverlauf", "Verloop van de dag"],

// CSV download
["csv_subtitle", "Download .csv reports ", "Report-Dateien im .csv-Format herunterladen", ".csv-rapporten downloaden"],
["csv_label_time_range", "Time range:", "Zeitraum:", "Tijdsperiode:"],
["csv_label_resolution", "Resolution:", "Granularität:", "Resolutie:"],
["csv_range_rad_lbl_day", "A single day", "Ein Tag", "Een dag"],
["csv_range_rad_lbl_month", "A month", "Ein Monat", "Een maand"],
["csv_range_rad_lbl_year", "A year", "Ein jahr", "Een jaar"],
["csv_range_rad_lbl_all", "All time", "Alles", "Altijd"],
["csv_res_rad_lbl_day", "Single days", "Einzelne Tage", "Per dag"],
["csv_res_rad_lbl_month", "Summed up by months", "Auf Monate summiert", "Per maand gesommeerd"],
["csv_res_rad_lbl_year", "Summed up by years", "Auf Jahre summiert", "Per jaar gesommeerd"],

// Months combo box
["cbx_month_1", "January", "Januar", "Januari"],
["cbx_month_2", "February", "Februar", "Februari"],
["cbx_month_3", "March", "März", "Maart"],
["cbx_month_4", "April", "April", "April"],
["cbx_month_5", "May", "Mai", "Mei"],
["cbx_month_6", "June", "Juni", "Juni"],
["cbx_month_7", "July", "Juli", "Juli"],
["cbx_month_8", "August", "August", "Augustus"],
["cbx_month_9", "September", "September", "September"],
["cbx_month_10", "October", "Oktober", "Oktober"],
["cbx_month_11", "November", "November", "November"],
["cbx_month_12", "December", "Dezember", "December"],

// Months combo box
["csv_cbx_month_1", "January", "Januar", "Januari"],
["csv_cbx_month_2", "February", "Februar", "Februari"],
["csv_cbx_month_3", "March", "März", "Maart"],
["csv_cbx_month_4", "April", "April", "April"],
["csv_cbx_month_5", "May", "Mai", "Mei"],
["csv_cbx_month_6", "June", "Juni", "Juni"],
["csv_cbx_month_7", "July", "Juli", "Juli"],
["csv_cbx_month_8", "August", "August", "Augustus"],
["csv_cbx_month_9", "September", "September", "September"],
["csv_cbx_month_10", "October", "Oktober", "Oktober"],
["csv_cbx_month_11", "November", "November", "November"],
["csv_cbx_month_12", "December", "Dezember", "December"],

// Info
["info_no_data", "No data is available for the selected time span.", "Für den gewählten Zeitraum liegen keine Daten vor.", "Er zijn geen gegevens beschikbaar voor de geselecteerde periode."],
];

let chartStrings = [
    // HTML element ID          English (1)             German (2)              Dutch (3)
    ["chart_produced_w", "Production", "Erzeugung", "Productie"],
    ["chart_consumed_w", "Consumption", "Verbrauch", "Verbruik"],
    ["chart_fed_in_w", "Feed-in", "Einspeisung", "Teruglevering"],
    ["chart_from_grid", "From grid", "Aus dem Netz", "Uit het net"],
    ["chart_from_pv", "From PV", "Aus PV", "Van PV"],
    ["chart_produced", "Produced", "Erzeugt", "Geproduceerd"],
    ["chart_consumed", "Consumed", "Verbraucht", "Verbruikt"],
    ["chart_fed_in", "Fed in", "Eingespeist", "Teruggeleverd"],
    ["chart_self_consumed", "Self consumed", "Eigenverbrauch", "Zelf verbruikt"],
    ["chart_produced_self_kwh", "Consumed directly", "Direktverbrauch", "Direct verbruikt"],
    ["chart_produced_grid_kwh", "Feed-in", "Einspeisung", "Teruglevering"],
    ["chart_consumed_pv_kwh", "From PV", "Aus PV", "Van PV"],
    ["chart_consumed_grid_kwh", "From grid", "Netzbezug", "Uit net"],
    ["chart_total", "Total", "Gesamt", "Totaal"],
];


let historyStrings = [
    // HTML element ID      English (1)             German (2)           Dutch (3)
    ["daily_data", "Daily Data", "Daten nach Tag", "Daggegevens"],
    ["monthly_data", "Monthly Data", "Daten nach Monat", "Maandgegevens"],
    ["yearly_data", "Yearly Data", "Daten nach Jahr", "Jaargegevens"],
    ["all_time_data", "All Time Data", "Allzeitdaten", "Totaal"],
];



function restoreLanguage() {
    var lang = localStorage.getItem("lang");
    if (lang != null)
        switchLanguageByIndex(parseInt(lang));
}

function switchLanguageToEnglish() {
    switchLanguageByIndex(gLangEn);
}

function switchLanguageToGerman() {
    switchLanguageByIndex(gLangDe);
}

// Nieuw: wisselen naar Nederlands
function switchLanguageToDutch() {
    switchLanguageByIndex(gLangNl);
}


function switchLanguageByIndex(index) {
    gCurLang = index;
    localStorage.setItem("lang", index)
    translations.forEach(translation => {
        try {
            document.getElementById(translation[0]).innerHTML = translation[index];
        } catch (error) {
            console.error("Could not localize element " + translation[0] + ": " + error);
        }
    });
}


function getChartString(id) {
    for (i = 0; i < chartStrings.length; ++i)
        if (chartStrings[i][0] == id)
            return chartStrings[i][gCurLang];
    return "...";
}

function getHistoryString(id) {
    for (i = 0; i < historyStrings.length; ++i)
        if (historyStrings[i][0] == id)
            return historyStrings[i][gCurLang];
    return "...";
}


// Number format with 2 decimals
const format2_en = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const format2_de = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const format2_nl = new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

// Number format with 0 decimals
const format0_en = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const format0_de = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const format0_nl = new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});


let monthNames = [
    // English (1), German (2), Dutch (3)
    ["January", "Januar", "Januari"],
    ["February", "Februar", "Februari"],
    ["March", "März", "Maart"],
    ["April", "April", "April"],
    ["May", "Mai", "Mei"],
    ["June", "Juni", "Juni"],
    ["July", "Juli", "Juli"],
    ["August", "August", "Augustus"],
    ["September", "September", "September"],
    ["October", "Oktober", "Oktober"],
    ["November", "November", "November"],
    ["December", "Dezember", "December"],
];


function getMonthName(index) {
    return monthNames[index][gCurLang - 1];
}

function getLocale() {
    if (gCurLang == gLangDe) return "de";
    else if (gCurLang == gLangNl) return "nl";
    else return "en";
}

function getUnitDays() {
    if (gCurLang == gLangDe) return "Tage";
    else if (gCurLang == gLangNl) return "dagen";
    else return "days";
}


function prettyPrintDateString(date) {
    var d = new Date(date)
    let localeDate = d.toLocaleString(getLocale(), {
        weekday: "long",
        day: "numeric",
        year: "numeric",
        month: "long",
    });
    return localeDate;
}

function prettyPrintDateStringWithoutDay(date) {
    var d = new Date(date)
    let localeDate = d.toLocaleString(getLocale(), {
        year: "numeric",
        month: "long",
    });
    return localeDate;
}