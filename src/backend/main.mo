import Text "mo:core/Text";
import Set "mo:core/Set";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    email : Text;
    message : Text;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Text.compare(inquiry1.message, inquiry2.message);
    };
  };

  let inquiries = Set.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      email;
      message;
    };
    if (inquiries.contains(inquiry)) {
      Runtime.trap("This inquiry has already been submitted.");
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
