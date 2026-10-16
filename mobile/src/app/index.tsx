
import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  navy: '#102C4E',
  blue: '#245987',
  lightBlue: '#E5EFF8',
  background: '#F6F8FB',
  muted: '#708198',
  white: '#FFFFFF',
};

const places = [
  {
    id: 1,
    name: 'Bakklandet',
    icon: '☕',
    quests: 3,
    top: '32%',
    left: '56%',
  },
  {
    id: 2,
    name: 'Nidarosdomen',
    icon: '⛪',
    quests: 2,
    top: '56%',
    left: '8%',
  },
  {
    id: 3,
    name: 'Torget',
    icon: '🏛️',
    quests: 4,
    top: '13%',
    left: '8%',
  },
  {
    id: 4,
    name: 'Munkholmen',
    icon: '🏝️',
    quests: 2,
    top: '76%',
    left: '50%',
  },
] as const;

type Place = (typeof places)[number];

export default function HomeScreen() {
  const [selectedPlace, setSelectedPlace] =
    useState<Place | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* BRAND */}
        <View style={styles.topbar}>
          <View>
            <Text style={styles.logo}>BYQUEST<Text style={styles.logoDot}>.</Text></Text>
            <Text style={styles.brandCaption}>
              UTFORSK MER. OPPLEV MER.
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>T</Text>
          </View>
        </View>

        {/* GREETING */}
        <View style={styles.greeting}>
          <Text style={styles.eyebrow}>
            DIN BY. DITT EVENTYR.
          </Text>

          <Text style={styles.title}>
            Hei, eventyrer! 👋
          </Text>

          <Text style={styles.subtitle}>
            Trondheim er full av historier.
            Klar for å oppdage noe nytt?
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>✦</Text>
            <View>
              <Text style={styles.statValue}>0 XP</Text>
              <Text style={styles.statLabel}>Dine poeng</Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🏆</Text>
            <View>
              <Text style={styles.statValue}>–</Text>
              <Text style={styles.statLabel}>Ukens plass</Text>
            </View>
          </View>
        </View>

        {/* CITY HEADING */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>
              START EVENTYRET
            </Text>
            <Text style={styles.sectionTitle}>
              Utforsk Trondheim
            </Text>
          </View>
          <View style={styles.livePill}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>4 steder</Text>
          </View>
        </View>

        {/* CITY MAP */}
        <View style={styles.cityMap}>
          <View style={styles.mapGrassOne} />
          <View style={styles.mapGrassTwo} />
          <View style={styles.river} />
          <View style={styles.roadOne} />
          <View style={styles.roadTwo} />

          <Text style={styles.mapWaterLabel}>NIDELVA</Text>

          {places.map((place) => (
            <Pressable
              key={place.id}
              onPress={() => setSelectedPlace(place)}
              style={[
                styles.mapMarker,
                {
                  top: place.top,
                  left: place.left,
                },
                selectedPlace?.id === place.id &&
                  styles.selectedMarker,
              ]}
            >
              <View style={styles.markerIcon}>
                <Text style={styles.markerEmoji}>
                  {place.icon}
                </Text>
              </View>
              <Text style={styles.markerName}>
                {place.name}
              </Text>
            </Pressable>
          ))}

          <View style={styles.mapHint}>
            <Text style={styles.mapHintText}>
              📍 Trykk på et sted for å utforske
            </Text>
          </View>
        </View>

        {/* PLACE DETAILS */}
        {selectedPlace && (
          <View style={styles.placeDetails}>
            <View style={styles.detailsTop}>
              <View style={styles.detailsIcon}>
                <Text style={{ fontSize: 26 }}>
                  {selectedPlace.icon}
                </Text>
              </View>

              <Pressable
                onPress={() => setSelectedPlace(null)}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>✕</Text>
              </Pressable>
            </View>

            <Text style={styles.detailsTitle}>
              {selectedPlace.name}
            </Text>

            <Text style={styles.detailsDescription}>
              Oppdag lokale historier, utforsk området
              og gjennomfør spennende oppdrag.
            </Text>

            <View style={styles.questBadge}>
              <Text style={styles.questBadgeText}>
                ✦ {selectedPlace.quests} oppdrag tilgjengelig
              </Text>
            </View>

            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                Utforsk stedet →
              </Text>
            </Pressable>
          </View>
        )}

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            Din by har mer å by på.
          </Text>
          <Text style={styles.footerText}>
            Utforsk steder, oppdag historier og samle poeng.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 22,
    paddingBottom: 45,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
  },
  logo: {
    fontSize: 25,
    fontWeight: '900',
    color: COLORS.navy,
    letterSpacing: -1,
  },
  logoDot: {
    color: '#E0A347',
  },
  brandCaption: {
    fontSize: 9,
    color: COLORS.muted,
    letterSpacing: 1.4,
    marginTop: 3,
    fontWeight: '700',
  },
  avatar: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.navy,
  },
  greeting: {
    marginTop: 38,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.blue,
    marginBottom: 12,
  },
  title: {
    fontSize: 31,
    fontWeight: '800',
    color: COLORS.navy,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.muted,
    marginTop: 10,
    maxWidth: 300,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 17,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#EAF0F5',
  },
  statIcon: {
    fontSize: 24,
    color: '#E0A347',
  },
  statValue: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.navy,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 3,
  },
  sectionHeader: {
    marginTop: 35,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionEyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: COLORS.blue,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.navy,
    letterSpacing: -0.6,
  },
  livePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#E7F3EA',
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#39965F',
  },
  liveText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#32784C',
  },
  cityMap: {
    height: 430,
    borderRadius: 25,
    backgroundColor: '#E4EDE5',
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#D9E5DC',
  },
  mapGrassOne: {
    position: 'absolute',
    backgroundColor: '#D0E4D3',
    width: 190,
    height: 170,
    borderRadius: 90,
    top: -50,
    left: -35,
  },
  mapGrassTwo: {
    position: 'absolute',
    backgroundColor: '#CDE1D1',
    width: 220,
    height: 200,
    borderRadius: 100,
    bottom: 20,
    right: -80,
  },
  river: {
    position: 'absolute',
    width: 95,
    height: 650,
    backgroundColor: '#A7CEE4',
    left: '42%',
    top: -90,
    transform: [{ rotate: '23deg' }],
    borderRadius: 45,
  },
  roadOne: {
    position: 'absolute',
    backgroundColor: '#F8F6EB',
    width: 600,
    height: 18,
    top: 140,
    left: -90,
    transform: [{ rotate: '-21deg' }],
  },
  roadTwo: {
    position: 'absolute',
    backgroundColor: '#F8F6EB',
    width: 600,
    height: 16,
    top: 300,
    left: -80,
    transform: [{ rotate: '24deg' }],
  },
  mapWaterLabel: {
    position: 'absolute',
    top: 200,
    left: '43%',
    color: '#5F9FC1',
    fontSize: 10,
    letterSpacing: 3,
    fontWeight: '800',
    transform: [{ rotate: '75deg' }],
  },
  mapMarker: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingVertical: 11,
    paddingHorizontal: 12,
    alignItems: 'center',
    minWidth: 105,
    borderWidth: 2,
    borderColor: COLORS.white,
    elevation: 4,
    shadowColor: COLORS.navy,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  selectedMarker: {
    borderColor: COLORS.blue,
    backgroundColor: '#EFF6FC',
  },
  markerIcon: {
    backgroundColor: COLORS.lightBlue,
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  markerEmoji: {
    fontSize: 19,
  },
  markerName: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.navy,
  },
  mapHint: {
    position: 'absolute',
    bottom: 14,
    alignSelf: 'center',
    backgroundColor: COLORS.navy,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  mapHintText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '600',
  },
  placeDetails: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 22,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E9EFF5',
  },
  detailsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    color: COLORS.muted,
    fontSize: 18,
  },
  detailsTitle: {
    fontSize: 23,
    color: COLORS.navy,
    fontWeight: '800',
    marginTop: 15,
  },
  detailsDescription: {
    color: COLORS.muted,
    lineHeight: 23,
    marginTop: 8,
  },
  questBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.lightBlue,
    padding: 10,
    borderRadius: 10,
    marginTop: 18,
  },
  questBadgeText: {
    color: COLORS.blue,
    fontSize: 12,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: COLORS.navy,
    borderRadius: 14,
    padding: 17,
    marginTop: 20,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 15,
  },
  footer: {
    alignItems: 'center',
    marginTop: 35,
  },
  footerTitle: {
    fontSize: 17,
    color: COLORS.navy,
    fontWeight: '800',
  },
  footerText: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 7,
    textAlign: 'center',
  },
});

//hello this is soo cool
//ooo yes i like it