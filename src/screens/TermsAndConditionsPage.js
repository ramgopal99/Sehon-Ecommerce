import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsAndConditionsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.paragraph}>
        Welcome to our ecommerce platform. These terms and conditions outline the rules and regulations for the use of our website.
        By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do
        not accept all of the terms and conditions stated on this page.
      </Text>
      <Text style={styles.sectionTitle}>2. Intellectual Property Rights</Text>
      <Text style={styles.paragraph}>
        Other than the content you own, under these terms, we and/or our licensors own all the intellectual property rights and
        materials contained in this website.
      </Text>
      <Text style={styles.sectionTitle}>3. Restrictions</Text>
      <Text style={styles.paragraph}>
        You are specifically restricted from all of the following:
        - Publishing any website material in any other media.
        - Selling, sublicensing, and/or otherwise commercializing any website material.
        - Using this website in any way that is or may be damaging to this website.
        - Using this website in any way that impacts user access to this website.
        - Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.
      </Text>
      <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
        or due to business interruption) arising out of the use or inability to use the materials on our website.
      </Text>
      <Text style={styles.sectionTitle}>5. Indemnification</Text>
      <Text style={styles.paragraph}>
        You hereby indemnify to the fullest extent us from and against any and/or all liabilities, costs, demands, causes of action,
        damages and expenses arising in any way related to your breach of any of the provisions of these terms.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
  },
});

export default TermsAndConditionsPage;
