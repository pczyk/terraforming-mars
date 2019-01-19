
import { AdaptationTechnology } from "./cards/AdaptationTechnology";
import { AdvancedAlloys } from "./cards/AdvancedAlloys";
import { AdvancedEcosystems } from "./cards/AdvancedEcosystems";
import { AerobrakedAmmoniaAsteroid } from "./cards/AerobrakedAmmoniaAsteroid";
import { AntiGravityTechnology } from "./cards/AntiGravityTechnology";
import { AquiferPumping } from "./cards/AquiferPumping";
import { ArchaeBacteria } from "./cards/ArchaeBacteria";
import { ArtificialPhotosynthesis } from "./cards/ArtificialPhotosynthesis";
import { AsteroidMining } from "./cards/AsteroidMining";
import { AsteroidMiningConsortium } from "./cards/AsteroidMiningConsortium";
import { BeamFromAThoriumAsteroid } from "./cards/BeamFromAThoriumAsteroid";
import { BiomassCombustors } from "./cards/BiomassCombustors";
import { BuildingIndustries } from "./cards/BuildingIndustries";
import { Bushes } from "./cards/Bushes";
import { CaretakerContract } from "./cards/CaretakerContract";
import { Cartel } from "./cards/Cartel";
import { CEOsFavoriteProject } from "./cards/CEOsFavoriteProject";
import { ColonizerTrainingCamp } from "./cards/ColonizerTrainingCamp";
import { ConvoyFromEuropa } from "./cards/ConvoyFromEuropa";
import { CorporateStronghold } from "./cards/CorporateStronghold";
import { CupolaCity } from "./cards/CupolaCity";
import { Decomposers } from "./cards/Decomposers";
import { DesignedMicroOrganisms } from "./cards/DesignedMicroOrganisms";
import { DustSeals } from "./cards/DustSeals";
import { EcologicalZone } from "./cards/EcologicalZone";
import { EnergySaving } from "./cards/EnergySaving";
import { EquatorialMagnetizer } from "./cards/EquatorialMagnetizer";
import { ExtremeColdFungus } from "./cards/ExtremeColdFungus";
import { Farming } from "./cards/Farming";
import { Flooding } from "./cards/Flooding";
import { FoodFactory } from "./cards/FoodFactory";
import { FuelFactory } from "./cards/FuelFactory";
import { FusionPower } from "./cards/FusionPower";
import { GeneRepair } from "./cards/GeneRepair";
import { GeothermalPower } from "./cards/GeothermalPower";
import { GHGFactories } from "./cards/GHGFactories";
import { GreatDam } from "./cards/GreatDam";
import { GreatEscarpmentConsortium } from "./cards/GreatEscarpmentConsortium";
import { Hackers } from "./cards/Hackers";
import { HeatTrappers } from "./cards/HeatTrappers";
import { Herbivores } from "./cards/Herbivores";
import { HiredRaiders } from "./cards/HiredRaiders";
import { IceCapMelting } from "./cards/IceCapMelting";
import { ImportedGHG } from "./cards/ImportedGHG";
import { ImportedNitrogen } from "./cards/ImportedNitrogen";
import { ImportOfAdvancedGHG } from "./cards/ImportOfAdvancedGHG";
import { IndenturedWorkers } from "./cards/IndenturedWorkers";
import { IndustrialCenter } from "./cards/IndustrialCenter";
import { IndustrialMicrobes } from "./cards/IndustrialMicrobes";
import { Insects } from "./cards/Insects";
import { Insulation } from "./cards/Insulation";
import { InventionContest } from "./cards/InventionContest";
import { InvestmentLoan } from "./cards/InvestmentLoan";
import { LagrangeObservatory } from "./cards/LagrangeObservatory";
import { LargeConvoy } from "./cards/LargeConvoy";
import { LavaFlows } from "./cards/LavaFlows";
import { Lichen } from "./cards/Lichen";
import { Livestock } from "./cards/Livestock";
import { LocalHeatTrapping } from "./cards/LocalHeatTrapping";
import { MagneticFieldDome } from "./cards/MagneticFieldDome";
import { MagneticFieldGenerators } from "./cards/MagneticFieldGenerators";
import { MediaArchives } from "./cards/MediaArchives";
import { MicroMills } from "./cards/MicroMills";
import { MiningArea } from "./cards/MiningArea";
import { MoholeArea } from "./cards/MoholeArea";
import { Moss } from "./cards/Moss";
import { NaturalPreserve } from "./cards/NaturalPreserve";
import { NitriteReducingBacteria } from "./cards/NitriteReducingBacteria";
import { NitrophilicMoss } from "./cards/NitrophilicMoss";
import { NoctisFarming } from "./cards/NoctisFarming";
import { OlympusConference } from "./cards/OlympusConference";
import { OpenCity } from "./cards/OpenCity";
import { Pets } from "./cards/Pets";
import { PermafrostExtraction } from "./cards/PermafrostExtraction";
import { PeroxidePower } from "./cards/PeroxidePower";
import { Plantation } from "./cards/Plantation";
import { PowerInfrastructure } from "./cards/PowerInfrastructure";
import { PowerPlant } from "./cards/PowerPlant";
import { PowerSupplyConsortium } from "./cards/PowerSupplyConsortium";
import { ProtectedHabitats } from "./cards/ProtectedHabitats";
import { ProtectedValley } from "./cards/ProtectedValley";
import { RadSuits } from "./cards/RadSuits";
import { Sabotage } from "./cards/Sabotage";
import { Satellites } from "./cards/Satellites";
import { Shuttles } from "./cards/Shuttles";
import { SoilFactory } from "./cards/SoilFactory";
import { SolarPower } from "./cards/SolarPower";
import { StandardTechnology } from "./cards/StandardTechnology";
import { Steelworks } from "./cards/Steelworks";
import { StripMine } from "./cards/StripMine";
import { SubterraneanReservoir } from "./cards/SubterraneanReservoir";
import { SymbioticFungus } from "./cards/SymbioticFungus";
import { TectonicStressPower } from "./cards/TectonicStressPower";
import { TitaniumMine } from "./cards/TitaniumMine";
import { TransNeptuneProbe } from "./cards/TransNeptuneProbe";
import { TropicalResort } from "./cards/TropicalResort";
import { TundraFarming } from "./cards/TundraFarming";
import { UrbanizedArea } from "./cards/UrbanizedArea";
import { WaterSplittingPlant } from "./cards/WaterSplittingPlant";
import { WavePower } from "./cards/WavePower";
import { Windmills } from "./cards/Windmills";
import { Worms } from "./cards/Worms";
import { Zeppelins } from "./cards/Zeppelins";

import { IProjectCard } from "./cards/IProjectCard";

const ALL_CARDS: Array<IProjectCard> = [
    new AdaptationTechnology(),
    new AdvancedAlloys(),
    new AdvancedEcosystems(),
    new AerobrakedAmmoniaAsteroid(),
    new AntiGravityTechnology(),
    new AquiferPumping(),
    new ArchaeBacteria(),
    new ArtificialPhotosynthesis(),
    new AsteroidMining(),
    new AsteroidMiningConsortium(),
    new BeamFromAThoriumAsteroid(),
    new BiomassCombustors(),
    new BuildingIndustries(),
    new Bushes(),
    new CaretakerContract(),
    new Cartel(),
    new CEOsFavoriteProject(),
    new ColonizerTrainingCamp(),
    new ConvoyFromEuropa(),
    new CorporateStronghold(),
    new CupolaCity(),
    new Decomposers(),
    new DesignedMicroOrganisms(),
    new DustSeals(),
    new EcologicalZone(),
    new EnergySaving(),
    new EquatorialMagnetizer(),
    new ExtremeColdFungus(),
    new Farming(),
    new Flooding(),
    new FoodFactory(),
    new FusionPower(),
    new FuelFactory(),
    new GeneRepair(),
    new GeothermalPower(),
    new GreatDam(),
    new GreatEscarpmentConsortium(),
    new Hackers(),
    new HeatTrappers(),
    new Herbivores(),
    new IceCapMelting(),
    new ImportedGHG(),
    new ImportedNitrogen(),
    new ImportOfAdvancedGHG(),
    new IndenturedWorkers(),
    new IndustrialCenter(),
    new IndustrialMicrobes(),
    new Insects(),
    new Insulation(),
    new InventionContest(),
    new InvestmentLoan(),
    new LagrangeObservatory(),
    new LargeConvoy(),
    new LavaFlows(),
    new Lichen(),
    new Livestock(),
    new LocalHeatTrapping(),
    new MagneticFieldDome(),
    new MagneticFieldGenerators(),
    new MediaArchives(),
    new MicroMills(),
    new MiningArea(),
    new MoholeArea(),
    new Moss(),
    new NaturalPreserve(),
    new NitriteReducingBacteria(),
    new NitrophilicMoss(),
    new NoctisFarming(),
    new OlympusConference(),
    new OpenCity(),
    new PermafrostExtraction(),
    new PeroxidePower(),
    new Pets(),
    new Plantation(),
    new PowerInfrastructure(),
    new PowerPlant(),
    new PowerSupplyConsortium(),
    new ProtectedHabitats(),
    new ProtectedValley(),
    new RadSuits(),
    new Sabotage(),
    new Satellites(),
    new Shuttles(),
    new SoilFactory(),
    new SolarPower(),
    new StandardTechnology(),
    new Steelworks(),
    new StripMine(),
    new SubterraneanReservoir(),
    new SymbioticFungus(),
    new TectonicStressPower(),
    new TitaniumMine(),
    new TransNeptuneProbe(),
    new TropicalResort(),
    new TundraFarming(),
    new UrbanizedArea(),
    new WaterSplittingPlant(),
    new WavePower(),
    new Windmills(),
    new Worms(),
    new Zeppelins()
];

export class Dealer {
    public getCards(count: number): Array<IProjectCard> {
        return [];
    }    
}
